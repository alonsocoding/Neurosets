import { Component, OnInit } from '@angular/core';

const brain = require('brain');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Settings to datatable

  settings = {
    actions: {
      position: 'right',
      add: false,
      edit: false,
    },
    delete: {
      deleteButtonContent: '<span class="fas fa-trash-alt"></span>',
      confirmDelete: true,
    },
    columns: {
      title: {
        title: 'Title'
      },
      output1: {
        title: 'Output 1'
      },
      output2: {
        title: 'Output 2'
      }
    }
  };

  // Data to set datatable

  data = [
    {
      title: "Plant 1",
      output1: 1,
      output2: 0
    },
    {
      title: "Plant 1",
      output1: 0,
      output2: 1
    },
    
    {
      title: "Plant 2",
      output1: 0,
      output2: 0
    }
  ];

  public net;
  public output;
  public input1;
  public input2;

  constructor() {

    this.input1 = 0;
    this.input2 = 0;
    this.output = 0;

    this.net = new brain.NeuralNetwork();

    this.net.train([{input: [0, 0], output: [0]},  
           {input: [0, 1], output: [1]},
           {input: [1, 0], output: [1]},
           {input: [1, 1], output: [0]}]);
  }

  ngOnInit() {

  }

  showResult() {
    this.output = this.net.run([this.input1, this.input2]); 
  }


}
