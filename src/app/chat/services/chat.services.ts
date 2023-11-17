import { IChat } from '../interfaces/Chat.interfaces';
import { IResponse } from '../interfaces/Response.interfaces';

const ENDPOINT = "https://julio-gpt-auth.onrender.com/api/chat/playground";

interface ISendMessageParams {
    history: any[],
    question: string
}

export const sendMessage = async (params:ISendMessageParams): Promise<IResponse<IChat>> => {


    const result = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });

    const data: IResponse<IChat> = await result.json();
    console.log("data", data);
    return data;
};
