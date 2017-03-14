function Set() {


    this.intersection = function (listA, listB) {

        var resultList = []; //create a resultlist array

        if (listA === null || listB === null) {
            return null;
        }

        for (var i = 0; i < listA.length; i++) {
            var nextValue = listA[i];

            for (var j = 0; j < listB.length; j++) {
                if (listB[j] === nextValue) {
                    resultList.push(listB[j]);
                    break;
                }
            }
        }
        return resultList;
    }


    this.union = function (listA, listB) {

        if (listA === null || listB === null) {
            return null;
        }

        var resultList = [];

        for (var i = 0; i < listA.length; i++) {
            resultList[i] = listA[i];
        }



        var checker = 0;

        for (var i = 0; i < listB.length; i++) {
            var nextValue = listB[i];

            for (var j = 0; j < listA.length; j++) {


                var test = listA[j];

                if (nextValue == test) {
                    checker = 1;

                  }


            }

            if (checker == 0) {
                resultList.push(nextValue);

            } else {checker = 0;}

            }


		/*-------------------------------Insert your code here -------------------------------------*/

        return resultList;
    }





	this.relativeCompliment = function(listB, listA) {

        if (listA === null || listB === null) {
            return null;
        }

	   var resultList = new Array();

        var checker = 0;

        for (var i = 0; i < listB.length; i++) {
            var nextValue = listB[i];

            for (var j = 0; j < listA.length; j++) {


                var test = listA[j];

                if (nextValue == test) {
                    checker = 1;

                }


            }

            if (checker == 0) {
                resultList.push(nextValue);

            } else {checker = 0;}

        }


        /*-------------------------------Insert your code here -------------------------------------*/

        return resultList;
       
	   return resultList;
	}



	this.symetricDifference = function(listA, listB) {

        if (listA === null || listB === null) {
            return null;
        }

	   var resultList = new Array();
        var checker = 0;

        for (var i = 0; i < listA.length; i++) {
            var nextValue1 = listA[i];

            for (var j = 0; j < listB.length; j++) {


                var test1 = listB[j];

                if (nextValue1 == test1) {
                    checker = 1;

                }


            }

            if (checker == 0) {
                resultList.push(nextValue1);

            } else {checker = 0;}

        }

        for (var i = 0; i < listB.length; i++) {
            var nextValue = listB[i];

            for (var j = 0; j < listA.length; j++) {


                var test = listA[j];

                if (nextValue == test) {
                    checker = 1;

                }


            }

            if (checker == 0) {
                resultList.push(nextValue);

            } else {checker = 0;}

        }
       
	   return resultList;
	}	
	

}
