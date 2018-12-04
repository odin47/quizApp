import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { DataSharedService } from '../data-shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [QuestionsService]
})
export class HomeComponent implements OnInit {

  numberOfQuestions: number;
  questionsAndAnswersArray: any;
  count: number;
  prevFlag: boolean;
  nextFlag: boolean;
  userAnswer: number;
  constructor(private questions: QuestionsService, private dataSerivce: DataSharedService) { }

  ngOnInit() {
    this.count = 0;
    this.nextFlag = true;
    this.prevFlag = false;
    this.questions.getQuestions().subscribe(data => {
      this.numberOfQuestions = (<any>data).length;
      this.questionsAndAnswersArray = data;
      this.questionsAndAnswersArray.forEach(question => question.userAnswer = 0);
    });
  }

  prevNextQuestion(position) {
    if (position === 'prev' && this.count > -1) {
      this.count--;
      this.nextFlag = true;
    }
    if (position === 'next' && this.count <= this.numberOfQuestions) {
      this.count++;
      this.prevFlag = true;
    }
    if (position === 'prev' && this.count <= 0) {
      this.prevFlag = false;
    }
    if (position === 'next' && this.count >= this.numberOfQuestions - 1) {
      this.nextFlag = false;
    }
  }
  submitQuiz() {
    this.dataSerivce.setResult(this.questionsAndAnswersArray);
  }
}
