import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

const brain = require('brain');
import swal from 'sweetalert2'

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
      input1: {
        title: 'Input 1'
      },
      input2: {
        title: 'Input 2'
      },
      output: {
        title: 'Output'
      }
    }
  };

  // Data to set datatable
  public data = [];

  // Array for datasets
  public datasets = [];

  closeResult: string;

  // Neural Network
  public net;

  // Info about dataset
  public titledata: string;
  public descriptiondata: string;

  // Input and Output 
  public title: string;
  public output: number;
  public input1: number;
  public input2: number;
  public trained: boolean;

  constructor(private modalService: NgbModal) {

    this.title = "";
    this.input1 = 0;
    this.input2 = 0;
    this.output = 0;
    this.trained = false;

    this.net = new brain.NeuralNetwork();
  }

  ngOnInit() {

  }

  addData() {
    if (this.title == "") {
      swal(
        'Data incomplete',
        'Your data is incomplete',
        'error'
      );
    } else {
      this.data.push({
        title: this.title,
        input1: this.input1,
        input2: this.input2,
        output: this.output
      });
      swal(
        'Data saved',
        'Your data is ready to train',
        'success'
      );
    }
  }

  addDataset() {
    if (this.titledata == "" || this.descriptiondata == "") {
      swal(
        'Dataset incomplete',
        'Your dataset is incomplete',
        'error'
      );
    } else {
      this.datasets.push({ name: this.titledata,
         description: this.descriptiondata });
      swal(
        'Dataset saved',
        'Your dataset is ready to work',
        'success'
      );
    }
  }

  trainData() {
    var training = [];
    for (var i = 0; i < this.data.length; i++) {
      training.push({
        input: [this.data[i].input1,
        this.data[i].input2],
        output: [this.data[i].output]
      });
    }
    this.net.train(training);
    swal(
      'Data trained',
      'Your data is ready to test',
      'success'
    );
    this.trained = true;
  }

  showResult() {
    if (!this.trained) {
      swal(
        'Data not trained',
        'Your data needs to be trained',
        'error'
      );
    } else {
      this.output = Math.round(this.net.run([this.input1, this.input2]));
    }
  }

  open(content) {
    this.modalService.open(content, {
      size: 'lg'
    }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
