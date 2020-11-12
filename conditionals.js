var count = 0;

$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickForm").submit(countClick);
    $("#ageForm").submit(checkAge);
    $("#taxForm").submit(calcSalesTax);
    $("#catForm").submit(recommendFood);
    $("#cardForm").submit(drawCard);

	function countClick(event) {
	    event.preventDefault();

		// Increment a variable that tracks the number of button clicks
        count++;

		// Print the current number of clicks to the <p> with ID "clickCountOutput"
        $("#clickCountOutput").text(count);

		// When the count gets to 10, reset it to 0
        if (count === 10)
        {
            count = 0;
        }


	}


    function checkAge(event) {
        event.preventDefault();

        // Get the user's birth year from the text
        // box with ID of "birthYear"
        var year = parseInt($("#birthYear").val());
        var age = 2020 - year;

        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"
        if (age < 18)
        {
            $("#birthYearOutput").text("Child");
        }

        // If they are 18 or over, print "Adult" instead
        else $("#birthYearOutput").text("Adult");

    }

    function calcSalesTax(event) {
        event.preventDefault();

        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        var tax = parseFloat($("#purchaseAmount").val());

        // Get the state from the text box with ID "state"

        var state = $("#state").val();

        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%
        var taxWI = 0.05;
        var taxIL = 0.08;
        var taxMN = 0.075;
        var taxMI = 0.055;

        if (state === "WI")
        {
            $("#salesTaxOutput").text(tax * taxWI);
        }
        else if (state === "IL")
        {
            $("#salesTaxOutput").text(tax * taxIL);
        }
        else if (state === "MN")
        {
            $("#salesTaxOutput").text(tax * taxMN);
        }
        else if (state === "MI")
        {
            $("#salesTaxOutput").text(tax * taxMI);
        }
        else $("#salesTaxOutput").text("Error");
        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"


        // If the user enters a state not listed above,
        // print "Error" instead


    }

    function recommendFood(event) {
        event.preventDefault();

        // Get the cat's age from the text box with
        // ID of "catAge"
        var age = parseFloat($("#catAge").val());

        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"
        if (age <= 2)
        {
            $("#catAgeOutput").text("Kitten Chow");
        }
        else if (age > 2 && age <= 10)
        {
            $("#catAgeOutput").text("Adult Chow");
        }
        else if (age > 10)
        {
            $("#catAgeOutput").text("Senior Chow");
        }
        else $("#catAgeOutput").text("Error");

        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"

    }

    function drawCard(event) {
        event.preventDefault();

        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var face = faceValue;
        var description = suit;

        if (suit === 1)
        {
            description = "Spades"
        }
        else if (suit === 2)
        {
            description = "Hearts"
        }
        else if (suit === 3)
        {
            description = "Clubs"
        }
        else if (suit === 4)
        {
            description = "Diamonds"
        }


        if (faceValue === 1)
        {
            face = "Ace of"
        }
        else if (faceValue === 2)
        {
            face = "2 of"
        }
        else if (faceValue === 3)
        {
            face = "3 of"
        }
        else if (faceValue === 4)
        {
            face = "4 of"
        }
        else if (faceValue === 5)
        {
            face = "5 of"
        }
        else if (faceValue === 6)
        {
            face = "6 of"
        }
        else if (faceValue === 7)
        {
            face = "7 of"
        }
        else if (faceValue === 8)
        {
            face = "8 of"
        }
        else if (faceValue === 9)
        {
            face = "9 of"
        }
        else if (faceValue === 10)
        {
            face = "10 of"
        }
        else if (faceValue === 11)
        {
            face = "Jack of"
        }
        else if (faceValue === 12)
        {
            face = "Queen of"
        }
        else if (faceValue === 13)
        {
            face = "King of"
        }

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"

        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"
        $("#drawCardOutput").text(`${face} ${description}`);

    }

});