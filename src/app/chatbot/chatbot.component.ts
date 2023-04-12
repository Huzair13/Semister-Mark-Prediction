import { Component } from '@angular/core';
import { OpenaiService } from '../openai.service';

export class textResponse{
  sno:number=1;
  text:string='';
  response:any='';
}
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  textList:textResponse[]=[{sno:1,text:'',response:''}];

  constructor(private openaiService: OpenaiService) {}

  generateText(data:textResponse) {
    if (data.text.trim() === '') {
      this.textList.push({sno: this.textList.length + 1, text: '', response: "Please enter a message."});
      return;
    }
    this.openaiService.generateText(data.text).then(text => {
      data.response = text;
      if(this.textList.length===data.sno){
        this.textList.push({sno:data.sno+1,text:'',response:''});
      }
    });
  }
}
