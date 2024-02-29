import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soundtexture_eh-en',
  templateUrl: './soundtexture_eh-en.component.html',
  styleUrls: ['../projects.component.css']
})
export class SoundTexture_EHEnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  copy_bibtex(paper_name){
    const tmp = document.createElement('textarea');
    tmp.textContent = '@inproceedings{sato2024soundtexture,\n  title={Sound Texture Feedback for a Projected Extended Hand Interface},\n  author={Sato, Yushi and Iwai, Daisuke and Sato, Kosuke},\n  journal={IEEE Access},\n  volume={12},\n  pages={27673--27682},\n  year={2024},\n  publisher={IEEE}\n}';
    document.body.appendChild(tmp);
    document.getSelection().selectAllChildren(tmp);
    document.execCommand("Copy");
    document.body.removeChild(tmp);
    alert("Copied!\n\n" + tmp.textContent);
  }
}