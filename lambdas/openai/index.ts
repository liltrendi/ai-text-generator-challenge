import { Handler, HandlerEvent } from "@netlify/functions";
import { Configuration, OpenAIApi } from "openai";
import { ILambdaBody } from "./utils/types";
import { buildChatContext, serverError, serverSuccess } from "./utils";

const openAi = new OpenAIApi(
    new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    })
);

const handler: Handler = async (event: HandlerEvent) => {
    let lambdaBody: ILambdaBody;

    if (!event.body)
        return serverError({
            code: 500,
            message: "Unable to parse request body",
            error: "No event body found",
        });

    try {
        lambdaBody = JSON.parse(event.body) as ILambdaBody;
    } catch (error) {
        return serverError({
            code: 500,
            message: "Unable to parse request body",
            error,
        });
    }

    try {
        const chatContext = buildChatContext(lambdaBody);

        const result = await openAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: chatContext,
            temperature: lambdaBody.temperature,
        });

        const responseTexts = result.data.choices.map(
            response => response.message?.content
        );

        return serverSuccess({
            code: 200,
            body: JSON.stringify({ result: responseTexts }),
        });
    } catch (error) {
        return serverError({
            code: 500,
            message: "Internal server error",
            error,
        });
    }
};

export { handler };
