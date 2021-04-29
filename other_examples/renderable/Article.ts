import { Page } from "./Page";
import { Author } from "./Author";

export class Article implements Page {
  private author: Author;
  private title: string;
  private content: string;
  private publishedAt: Date;

  constructor({title, content, author, publishedAt}) {
    this.title = title;
    this.content = content;
    this.author = author;

    this.publishedAt = publishedAt;
  }

  metaTitle() {
    return this.title;
  }

  metaDesc() {
    return this.content.substring(0, 20);
  }

  published() {
    return this.publishedAt.toDateString();
  }

  by() {
    return this.author;
  }
}