import { Component, OnInit } from '@angular/core';

import quizzData from '../../../assets/data/quizz_questions.json';
import { Question, Quizz } from '../../models/quizz.model';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent implements OnInit {
  private readonly quizz = quizzData as Quizz;

  title = '';

  questions: Question[] = [];
  questionSelected!: Question;

  answers: string[] = [];
  answerSelected = '';

  questionIndex = 0;
  questionMaxIndex = 0;

  finished = false;

  ngOnInit(): void {
    this.start();
  }

  start(): void {
    this.title = this.quizz.title;
    this.questions = this.quizz.questions;

    this.answers = [];
    this.answerSelected = '';
    this.questionIndex = 0;
    this.questionMaxIndex = this.questions.length;
    this.questionSelected = this.questions[this.questionIndex];
    this.finished = false;
  }

  get progress(): number {
    if (this.questionMaxIndex === 0) {
      return 0;
    }
    return Math.round((this.questionIndex / this.questionMaxIndex) * 100);
  }

  playerChoose(value: string): void {
    this.answers.push(value);
    this.nextStep();
  }

  private nextStep(): void {
    this.questionIndex += 1;

    if (this.questionIndex < this.questionMaxIndex) {
      this.questionSelected = this.questions[this.questionIndex];
      return;
    }

    const finalAnswer = this.checkResult(this.answers);
    this.answerSelected = this.quizz.results[finalAnswer];
    this.finished = true;
  }

  private checkResult(answers: string[]): string {
    return answers.reduce((previous, current, _index, arr) => {
      const previousCount = arr.filter((item) => item === previous).length;
      const currentCount = arr.filter((item) => item === current).length;
      return previousCount >= currentCount ? previous : current;
    });
  }
}
