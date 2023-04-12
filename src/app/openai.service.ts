import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private openai: OpenAIApi;
  configuration = new Configuration({
    apiKey: "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",
  });
  constructor() { 
    this.openai = new OpenAIApi(this.configuration);
  }
  
  generateText(prompt: string):Promise<string | undefined>{
    return this.openai.createCompletion({
         model: "text-davinci-003",
         prompt: prompt,
         max_tokens: 256
       }).then(response => {
         return response.data.choices[0].text;
       }).catch(error=>{
         return '';
       });
   }
}
