Password Generator:

I utilized the .css and .html provided with miniscule changes.  I changed the generate button background to green to make it my own :)

In my javascript, I kept things as simple as I could. 
I established arrays of the possilbe characters for the new password.  I prompted the user for several pieces of information, length of the password which was data provided 8 - 128, then prompted confirms for the type of characters to include in the password; Lower Case, Upper Case, Special Characters, and Numbers.  I required the user to choose at least one of the types of characters, if they did not choose even one, I alerted they needed to do so and re-asked the prompts.  This is one section I believe I can make the code more efficient, a means of asking the prompts a second time without actually writing them a second time in the code.  I will address this in a later update.  I added all characters chosen to a new array to choose from, but the problem became that it was possible once these characters were in a master array, the computer may not randomly choose the desired character since it was set to pick randomly.  Then to solve this, I added a formula to make sure once a character type was chosen, to automatically and randomly add that character to the array once.  This looks to have solved the problem.  The new password is then randomly picked from the data input and written to the text area designated for a new password.  

  
  
  


[![Screen-Shot-2020-12-26-at-1-43-07-PM.png](https://i.postimg.cc/XJ1mdPdn/Screen-Shot-2020-12-26-at-1-43-07-PM.png)](https://postimg.cc/dkd5K45f)

