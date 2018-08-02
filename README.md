### DoragonManga


### Resources Used: 

* Shades of violet: [violets](https://en.wikipedia.org/wiki/Shades_of_violet).
* https://www.flaticon.com/free-icon/dragon_982829
* https://www.font-generator.com/

### Templates EJS:

#### Home Container

~~~
{ mangaCoverPages: [], latestMangReleases: [] }
~~~

* mangaCoverPages => Array de coverPageContainer.
* latestMangaReleases => Array de mangaContainer.
~~~
mangaCoverContainer = {
  mangaTitle = "One Piece",
  coverPath = "/path/to/the/cover/page",
  lastChapter = "Chapter 190",
  url = "/path/to/the/manga"
}

latestMangaReleases = {
  mangaTitle = "Seirei no Moribito",
  coverPath = "path/to/the/cover/page",
  lastChapterList = [chapterContainer*5],
  url = "/path/to/the/manga"
}

chapterContainer = {
  name = "",
  releaseDate = "",
  url = ""
}

~~~
