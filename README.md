# 8-tile-puzzle
UI Assignment for Acceldata

## Initial plan
1. Create a table along with table-row and table-data to represent the matrix.
2. Find position of the empty tile.
3. Categorizing the position of empty tile into either at a corner or ceneter or any other place, find possible movable tiles for.
4. If the selected row is not empty tile, and comes under a movable tile index, swap the tiles.
5. Beautify to make it look user friendly.

---

## Final plan
1. Change the table structure to div.
2. Initialize matrix to show how the solution should look.
3. Create shuffle button and the corresponding functionality to begin the game.
4. Find position of the empty tile and check if the tile clicked by user is the empty one or not.
5. Check if the tile selected by user is a movable one or not.
6. Swap tiles if selected tile is not the empty one and direction is not a "No swap".

---

## Function Details
1. constructor()
    > To initialize the matrix.


2. shuffleMatrix()
    > A constant map is declared and initialized with each value set to false. This map is used to track the elements already inserted in the matrix.
    >
    > A random integer is generated which serves as the index for TILES array to read the value.
    >
    > This value if is not present in the matrix then we push it in the row and set it to true indicating that its been filled in the matrix.
    > Once we have a row ready to insert in the matrix, we push it inside the matrix.
    >
    > We increment the row count and reset the col size to 0.


3. moveTile()
    > We find the position of empty tile and check if the selected tile is the empty tile or not.
    >
    > We find direction of the tile selected and check if it is in the permissable movements list or not a swappable tile.
    >
    > If not an empty tile and a swappable one, we perform the swap on the tiles.


4. getEmptyTilePosition()
    > The matrix is iterated in a foreach loop.
    >
    > Each entry of the matrix is another 1-D array over which findIndex() runs to return the position of empty tile inside that 1-D array.
    > The row and column indexes are returned.


4. isEmptyTile()
    > Returns whether the selected tile is the empty tile or not.


4. getDirection()
    > Based on the selected row and column index and comparing it with the row and column postion of empty array, either its a horizontal movement or a vertical movement.
    >
    > If the conditions don't satisfy, it is taken that the selected tile is immovable.


4. getHorizontalDirection()
    > Using a switch case on the column index of the selected tile, we determine the direction of movement w.r.t. the empty tile
    >
    > If the conditions don't match on whether the selected tile is on the left or right of the empty tile, it is taken that its not a swappable tile.


4. getVerticalDirection()
    > Using a switch case on the row index of the selected tile, we determine the direction of movement w.r.t. the empty tile
    >
    > If the conditions don't match on whether the selected tile is above or below the empty tile, it is taken that its not a swappable tile.


4. swapTiles()
    > This function has all the required indexes for the swapping of tiles.
    >
    > We store the selected tile value in a constant temporarily.
    >
    > The selected tile is assigned an empty value.
    >
    > The position which previously had the empty tile is assigned the previous stored constant value.

---

## File Details
1. app-constants.ts
    > Includes all the constants used in the application to avoid hard coded string values.
    >
    > These constants are exported at a single point.


2. model.ts
    > Includes all the interfaces used in the application.
    >
    > These interfaces are exported at a single point.