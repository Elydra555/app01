// File: index.html
// Author: Klíber Regő Benedek
// Copyright: 2024, Klíber Regő Benedek
// Group: Szoft I/N/1
// Date: 2024-05-30
// Github: https://github.com/Elydra555/
// Licenc: GNU GPL

class Ell {

    aAxis?: HTMLInputElement | null;
    bAxis?: HTMLInputElement | null;
    cAxis?: HTMLInputElement | null;
    volume?: HTMLInputElement | null;
    calcBtn?: HTMLButtonElement | null;

    constructor() {
        this.bindHtml();
        this.handleEvent();
    }

    bindHtml() {
        this.aAxis = document.querySelector("#aaxis");
        this.bAxis = document.querySelector("#baxis");
        this.cAxis = document.querySelector("#cAxis");
        this.volume = document.querySelector("#volume");
        this.calcBtn = document.querySelector("#calcBtn");
    }

    handleEvent() {
        this.calcBtn?.addEventListener('click', () => {
            this.startCalc();
        });
    }

    startCalc() {
        const aaxis = Number(this.aAxis?.value);
        const baxis = Number(this.bAxis?.value);
        const caxis = Number(this.cAxis?.value);
        const volume = this.calcVolume(aaxis, baxis, caxis);
        this.rederResult(volume);
    }

    calcVolume(aaxis: number, baxis: number, caxis: number): number {
        const calc = 4/3 * Math.PI * aaxis * baxis * caxis
        return calc
    }
    rederResult(calc: number) {
        if(this.volume){
            this.volume.value = String(calc)
        }
    }
}

new Ell();