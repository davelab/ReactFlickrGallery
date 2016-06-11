// the aim of this module is to create an asset resource to share in the application

const loader = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNzBweCcgaGVpZ2h0PSc3MHB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgY2xhc3M9InVpbC1kZWZhdWx0Ij48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgY2xhc3M9ImJrIj48L3JlY3Q+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzYnIGhlaWdodD0nNicgcng9JzYnIHJ5PSc2JyBmaWxsPScjMzk3ZmJiJyB0cmFuc2Zvcm09J3JvdGF0ZSgwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMHMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0NycgeT0nNDcnIHdpZHRoPSc2JyBoZWlnaHQ9JzYnIHJ4PSc2JyByeT0nNicgZmlsbD0nIzM5N2ZiYicgdHJhbnNmb3JtPSdyb3RhdGUoMzYgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjFzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQ3JyB3aWR0aD0nNicgaGVpZ2h0PSc2JyByeD0nNicgcnk9JzYnIGZpbGw9JyMzOTdmYmInIHRyYW5zZm9ybT0ncm90YXRlKDcyIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC4ycycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzYnIGhlaWdodD0nNicgcng9JzYnIHJ5PSc2JyBmaWxsPScjMzk3ZmJiJyB0cmFuc2Zvcm09J3JvdGF0ZSgxMDggNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjNzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQ3JyB3aWR0aD0nNicgaGVpZ2h0PSc2JyByeD0nNicgcnk9JzYnIGZpbGw9JyMzOTdmYmInIHRyYW5zZm9ybT0ncm90YXRlKDE0NCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuNHMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0NycgeT0nNDcnIHdpZHRoPSc2JyBoZWlnaHQ9JzYnIHJ4PSc2JyByeT0nNicgZmlsbD0nIzM5N2ZiYicgdHJhbnNmb3JtPSdyb3RhdGUoMTgwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC41cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzYnIGhlaWdodD0nNicgcng9JzYnIHJ5PSc2JyBmaWxsPScjMzk3ZmJiJyB0cmFuc2Zvcm09J3JvdGF0ZSgyMTYgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjZzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQ3JyB3aWR0aD0nNicgaGVpZ2h0PSc2JyByeD0nNicgcnk9JzYnIGZpbGw9JyMzOTdmYmInIHRyYW5zZm9ybT0ncm90YXRlKDI1MiA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuN3MnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0NycgeT0nNDcnIHdpZHRoPSc2JyBoZWlnaHQ9JzYnIHJ4PSc2JyByeT0nNicgZmlsbD0nIzM5N2ZiYicgdHJhbnNmb3JtPSdyb3RhdGUoMjg4IDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC44cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzYnIGhlaWdodD0nNicgcng9JzYnIHJ5PSc2JyBmaWxsPScjMzk3ZmJiJyB0cmFuc2Zvcm09J3JvdGF0ZSgzMjQgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjlzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48L3N2Zz4='

module.exports = {
    loader
}