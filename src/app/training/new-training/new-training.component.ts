import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  trainingOptions = [
  {Id: 1, exercise_name: 'Squat'},
  {Id: 2, exercise_name: 'Leg press'},
  {Id: 3, exercise_name: 'Lunge'},
  {Id: 4, exercise_name: 'Deadlift'}
  ];

  @Output() trainingStart = new EventEmitter<void>();

  constructor(private db: AngularFirestore) { }

  ngOnInit() {

    // Getting data from Collection
    this.db.collection('exerciseMaster').valueChanges().subscribe(result => {
      console.log(result);
    });

  }

  onStartTraining() {
    this.trainingStart.emit();
  }

}
