import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eh_phf-en',
  templateUrl: './eh_phf-en.component.html',
  styleUrls: ['../projects.component.css']
})
export class EH_PHFEnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  //https://blog.beatdjam.com/entry/2018/06/22/190000
  copy_bibtex(paper_name){
    const tmp = document.createElement('textarea');
    if(paper_name == 'access'){
      tmp.textContent = '@article{sato2020modifying,\n  title={Modifying texture perception with pseudo-haptic feedback for a projected virtual hand interface},\n  author={Sato, Yushi and Hiraki, Takefumi and Tanabe, Naruki and Matsukura, Haruka and Iwai, Daisuke and Sato, Kosuke},\n  journal={IEEE Access},\n  volume={8},\n  pages={120473--120488},\n  year={2020},\n  publisher={IEEE}\n}';
    }
    else{
    tmp.textContent = '@inproceedings{sato2019pseudo,\n  title={Pseudo-haptic feedback in a projected virtual hand for tactile perception of textures},\n  author={Sato, Yushi and Tanabe, Naruki and Morita, Kohei and Hiraki, Takefumi and Punpongsanon, Parinya and Matsukura, Haruka and Iwai, Daisuke and Sato, Kosuke},\n  booktitle={Proc. IEEE World Haptics Conf.},\n  pages={1--2},\n  year={2019}\n}';
    }
    document.body.appendChild(tmp);
    document.getSelection().selectAllChildren(tmp);
    document.execCommand("Copy");
    document.body.removeChild(tmp);
    alert("クリップボードにコピーしました！\n\nコピーしたテキスト：\n" + tmp.textContent);

  }

}