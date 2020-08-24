import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  
  results = null;
  noResults = {
    state: false,
    message: "Hmm, there doesn't seem to be any results for that",
  };
  page = 1;
  
  ngOnInit(): void {
    document.querySelector("title").innerHTML = "Red Window - Search";
    document.querySelector("select").addEventListener("click", function(){
        this.style.backgroundColor = this.value;
        if(this.value == "none"){
          this.style.backgroundColor = "#f7f7f7";
        }
    })
    let search = null;
    document.getElementById("search").addEventListener("keydown", function(e) {search(e)})
    document.getElementById("search-btn").addEventListener("click", function(e) {search(e)})
    search = e => {
      if(e.keyCode == 13 || e.type == "click"){
        var v = (<HTMLElement>document.querySelectorAll(".page-selector-container")[0]).style.display = "block";
        var w = (<HTMLElement>document.querySelectorAll(".page-selector-container")[1]).style.display = "block";
        var x = (<HTMLElement>document.querySelector("main")).style.display = "block";
        var y = (<HTMLElement>document.querySelector(".input-container")).classList.add("input-container-small"); 
        let colour = document.querySelector("select").value;
        switch(colour) {
          case "none":
            colour = null;
            break;
          case "#003fff":
            colour = "blue";
            break;
          case "#00ff1d":
            colour = "green";
            break;
          case "#ffff14":
            colour = "yellow";
            break;
          case "#ffa100":
            colour = "orange";
            break;
          case "#E50A14":
            colour = "red";
            break;
          case "#db00a8":
            colour = "purple";
            break;
          case "black":
            colour = "black";
            break;
          case "white":
            colour = "white";
             break;
          default:
            colour = null;
        }
        let term = (<HTMLInputElement><unknown>document.getElementById("search")).value;
        document.querySelector("title").innerHTML = `Red Window - ${term}`;
        let url = `https://api.unsplash.com/search/photos/?&query=${term}&per_page=30&page=${this.page}&order_by=popular`;
        if(colour !== null){
          url = `https://api.unsplash.com/search/photos/?&query=${term}&per_page=30&page=${this.page}&order_by=popular&color=${colour}`;
        }
        fetch(url, {
          "method": "GET",
          headers: {
            Authorization: 'Client-ID xtf9hypRgcBD8krUCiqKv4CFehWwO9_n1o9QIx1XBtE',
          }
        })
        .then(res => res.json())
        .then(data => {
          this.results = data.results;
          if(this.results.length <= 0) {
            this.noResults = {
              state: true,
              message: "Hmm, there doesn't seem to be any results for that",
            }
          }
          else {
            this.noResults.state = false;
          }
        })
        .catch(() => {
          this.noResults = {
            state: true,
            message: "It seems like something went wrong, please try again later.",
          }
        });
      }
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    document.querySelectorAll(".fa-arrow-left")[0].addEventListener("click", function() {updatePage("-", null)})
      document.querySelectorAll(".fa-arrow-left")[1].addEventListener("click", function() {updatePage("-", null)})
      document.querySelectorAll(".fa-arrow-right")[0].addEventListener("click", function() {updatePage("+", null)})
      document.querySelectorAll(".fa-arrow-right")[1].addEventListener("click", function() {updatePage("+", null)})
      document.querySelectorAll(".page-selector")[0].addEventListener("keydown", function(e) {
        updatePage(e, this.value)
      })
      document.querySelectorAll(".page-selector")[1].addEventListener("keydown", function(e) {
        updatePage(e, this.value)
      })

      const updatePage = (e, x) => {
        const y = {
          type: "click",
        }
        if(e == "+") {
          this.page++
          search(y);
        }
        else if (e == "-") {
          if(this.page != 1) {
            this.page--;
          }
          search(y);
        }
        else {
          if(e.keyCode == 13) {
            let val = parseInt(x);
            if(val !== 0) {
              this.page = val;
            }
            search(y);
          }
        }
      }
  }

}
