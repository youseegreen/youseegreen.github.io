import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive_eh-en',
  templateUrl: './responsive_eh-en.component.html',
  styleUrls: ['../projects.component.css']
})
export class Responsive_EHEnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("responsive-eh-en");
  }

  copy_bibtex(paper_name){
    const tmp = document.createElement('textarea');
    tmp.textContent = '@inproceedings{sato2024responsive,\n  title={Responsive-ExtendedHand: Adaptive Visuo-Haptic Feedback Recognizing Object Property with RGB-D Camera for Projected Extended Hand},\n  journal={IEEE Access},\n  volume={12},\n  pages={38247--38257},\n  year={2024},\n  publisher={IEEE}\n}';
    document.body.appendChild(tmp);
    document.getSelection().selectAllChildren(tmp);
    document.execCommand("Copy");
    document.body.removeChild(tmp);
    alert("Copied!\n\n" + tmp.textContent);
  }
}
