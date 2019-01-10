<html>

    <head>
        <title>Flappy EXTREME</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="../style.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    </head>

<body class ="backgroundgameover">

    <div>
        <form class="homeButton" method="post" action="../../index.php">
            <button class="btn btn-primary" type="sumbit">Home</button>
        </form>
        <form class="retryButton" mehtod="post" action="game.view.php">
            <button class="btn btn-light" type="submit">Retry</button>
        </form>
    </div>
    <div class=yourescore>
        <p>YOUR SCORE:</p>
        <div class=scoreover id=scoreover>
        </div>
    </div>
    <div class=yourcoin>
        <p>YOUR COINS:</p>
        <div id=coinover class=coinover>
        </div>
    </div>
    <script>
            document.getElementById("scoreover").innerHTML = sessionStorage.getItem("score");
            document.getElementById("coinover").innerHTML = sessionStorage.getItem("coinscore");
    </script>

</body>

</html>