### DoragonManga

### Templates: 

#### Home

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
