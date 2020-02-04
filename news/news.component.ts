import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: any = [];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews()
      .subscribe((data) => {
        this.news = data.results;
      });
  }

}
