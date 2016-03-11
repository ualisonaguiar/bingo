<!DOCTYPE html>
<html lang="pt-br" ng-app="bingoApp">
    <head>
        <title>Bingo</title>
        <meta charset="utf-8">
        <!-- Incluindo boostrap -->
        <link rel="stylesheet" href="lib/bootstrap/bootstrap-3.3.6/css/bootstrap.min.css">
        <link rel="stylesheet" href="lib/bootstrap/bootstrap-3.3.6/css/bootstrap-theme.min.css">
        <!-- Incluindo fort awesome -->
        <link rel="stylesheet" href="lib/fort-awesome/font-awesome-4.5.0/css/font-awesome.min.css">
    </head>
    <body>
        <header>
            <nav class="navbar navbar-default">
                <div class="container">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="/">Bingo</a>
                    </div>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="/"><i class="fa fa-home"></i>Listagem</a></li>
                    </ul>
                </div>
            </nav>
        </header>
        <div class="container">
            <div ng-repeat="alert in alerts" class="alert alert-{{ alert.type }}">
                {{ alert.msg }}
            </div>
            <div ng-view></div>
        </div>
        <!-- Incluindo angular -->
        <script src="lib/angular/v1.5.0/angular.min.js"></script>
        <script src="lib/angular/v1.5.0/angular-route.min.js"></script>       
        <!-- Incluindo script padrao -->
        <script src="js/route.js"></script>
        <script src="js/util/Message.js"></script>
        <script type="text/javascript" src="module/inicial/service/BingoService.js"></script>
        <script type="text/javascript" src="module/inicial/controller/PesquisaBingoController.js"></script>
    </body>
</html>
