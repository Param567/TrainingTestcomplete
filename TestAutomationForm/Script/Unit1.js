function Test2()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://testpages.eviltester.com/styled/validation/input-validation.html");
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://testpages.eviltester.com/styled/validation/input-validation.html");
  Project.Variables.Dummy.Reset();
  for(; !Project.Variables.Dummy.IsEOF();)
  {
    //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("C:\\Users\\param.gupta\\Desktop\\Param\\TestPageData.csv.txt", "");
    //Maximizes the specified Window object.
    Aliases.browser.BrowserWindow.Maximize();
    //Sets the text KeywordTests.Test2.Variables.Dummy("First name") in the 'FirstName' text editor.
    Aliases.browser.pageInputValidation.FirstName.SetText(Project.Variables.Dummy.Value("First name"));
    //Sets the text KeywordTests.Test2.Variables.Dummy("Last name") in the 'LastName' text editor.
    Aliases.browser.pageInputValidation.LastName.SetText(Project.Variables.Dummy.Value("Last name"));
    //Sets the text KeywordTests.Test2.Variables.Dummy("Age") in the 'Age' text editor.
    Aliases.browser.pageInputValidation.Age.SetText(Project.Variables.Dummy.Value("Age"));
    //Selects the KeywordTests.Test2.Variables.Dummy("Country") item of the 'Country' combo box.
    Aliases.browser.pageInputValidation.Country.ClickItem(Project.Variables.Dummy.Value("Country"));
    //Enters KeywordTests.Test2.Variables.Dummy("Notes") in the 'Notes' object.
    Aliases.browser.pageInputValidation.Notes.Keys(Project.Variables.Dummy.Value("Notes"));
    //Clicks the 'submitbutton' button.
    Aliases.browser.pageInputValidation.submitbutton.ClickButton();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageInputValidation2.Wait();
    //Clicks the 'linkBacktoform' link.
    Aliases.browser.pageInputValidation2.linkBacktoform.Click();
    //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder();
    Project.Variables.Dummy.Next();
  }
}