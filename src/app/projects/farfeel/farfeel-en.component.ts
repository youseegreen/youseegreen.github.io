import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farfeel-en',
  templateUrl: './farfeel-en.component.html',
  styleUrls: ['../projects.component.css']
})
export class fARFEELEnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  copy_bibtex(paper_name){
    const tmp = document.createElement('textarea');
    tmp.textContent = '@inproceedings{tanabe2019farfeel,\n  title={FARFEEL: Providing haptic sensation of touched objects using visuo-haptic feedback},\n  author={Tanabe, Naruki and Sato, Yushi and Morita, Kohei and Inagaki, Michiya and Fujino, Yuichi and Punpongsanon, Parinya and Matsukura, Haruka and Iwai, Daisuke and Sato, Kosuke},\n  booktitle={2019 IEEE Conference on Virtual Reality and 3D User Interfaces (VR)},\n  pages={1355--1356},\n  year={2019},\n  publisher={IEEE}\n}';
    document.body.appendChild(tmp);
    document.getSelection().selectAllChildren(tmp);
    document.execCommand("Copy");
    document.body.removeChild(tmp);
    alert("クリップボードにコピーしました！\n\nコピーしたテキスト：\n" + tmp.textContent);
  }

}
