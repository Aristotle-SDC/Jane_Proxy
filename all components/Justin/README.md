# JustinComponent-Service

MACRO SPECS
Related Tracks, In Playlists, and In Albums
each display up to three of their respective items (Make this a conditionally rendering list).
Each of these contained in their own div.
These render IF there are related tracks, or the track is in playlists or albums.

SECONDARY GOALS
Like and Repost sections,
displaying total likes and reposts for each section, with a view all link inLine with likes
a list of usersProfile pictures underneath

ITEM SPECS
Each Item contains album art on the left, and then from top down, 
the artist name, 
the track/playlist/album name, 
and then a list of counts in one line - plays, likes, shares, and comments.
Item onMouseover - play button appears on album art on left, like and more/options buttons appear on the right side
  Play button - renders track page and plays (out of scope?)
  like button - adds 1 to the current count on the page and in the db; if clicked again subtracts one from the current count and from the count in the db (IN SCOPE)
  more/options button - opens a dropdown menu with repost, share, add to next up, add to playlist, download file, and station buttons. (FOR NOW, ALL OUT OF SCOPE). 
    options menu - onMouseOver, highlight (OUT OF SCOPE)
Item onMouseoff - buttons disappear    

  COUNT LIST SPECS
  Of these count icons, the count number on the latter three embold on mouseover, denoting their clickability (IN SCOPE).
  onClick LIKES - redirects to a page of users who have liked the track (OUT OF SCOPE).
  onCLick SHARES - takes to a page of users who have shared the track (OUT OF SCOPE).
  onClick COMMENTS - takes to comment page (OUT OF SCOPE).



