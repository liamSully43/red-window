import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css']
})
export class BlueComponent implements OnInit {

  constructor() { }

  results = null;
  noResults = {
    state: false,
    message: "That's it, there's no more blue photos available",
  };
  page = 1;

  ngOnInit(): void {
    document.querySelector("title").innerHTML = "Red Window - Blue";
    let search = null;
    search = () => {
      fetch(`https://api.unsplash.com/search/photos/?&query=blue&per_page=30&page=${this.page}&order_by=popular&color=blue`, {
        "method": "GET",
        headers: {
          Authorization: 'Client-ID xtf9hypRgcBD8krUCiqKv4CFehWwO9_n1o9QIx1XBtE',
        }
      })
      .then(res => res.json())
      .then(data => {
        this.results = data.results
        if(this.results.length <= 0) {
          this.noResults = {
            state: true,
            message: "That's it, there's no more blue photos available",
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
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    search()

    document.querySelectorAll(".fa-arrow-left")[0].addEventListener("click", function() {updatePage("-", null)});
    document.querySelectorAll(".fa-arrow-left")[1].addEventListener("click", function() {updatePage("-", null)});
    document.querySelectorAll(".fa-arrow-right")[0].addEventListener("click", function() {updatePage("+", null)});
    document.querySelectorAll(".fa-arrow-right")[1].addEventListener("click", function() {updatePage("+", null)});
    document.querySelectorAll(".page-selector")[0].addEventListener("keydown", function(e) {
      updatePage(e, this.value);
    });
    document.querySelectorAll(".page-selector")[1].addEventListener("keydown", function(e) {
      updatePage(e, this.value);
    });
    const updatePage = (e, x) => {
      if(e == "+") {
        this.page++;
        search();
      }
      else if (e == "-") {
        if(this.page != 1) {
          this.page--;
        }
        search();
      }
      else {
        if(e.keyCode == 13) {
          let val = parseInt(x);
          if(val !== 0) {
            this.page = val;
          }
          search();
        }
      }
    }
  }

}
