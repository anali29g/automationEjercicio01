Feature: Your Store Register Account
  @sanity
  Scenario: Mandatory Fields

    Given User is in the register page
    When User does not fill any field 
    Then Error message detailing what mandatory fields are missing
  

  @sanity
  Scenario Outline: Duplicate Email

    Given User fills <name> <lastname> <telephone> <password> <confirmpass> <email> with scenario description
    When User Submits
    Then A <message> detailing the warning

    Examples: 
    |    name    | lastname | telephone | password | confirmpass |              email          |                message                |  
    | Alessandro |   Silva  | 953105988 |   12345  |     12345   | alessandro.silva@oktana.com | E-Mail Address is already registered! |
  

  Scenario Outline: Invalid Email

    Given User fills <name> <lastname> <telephone> <password> <confirmpass> <email> with scenario description
    When User Submits
    Then A <message> detailing the error

    Examples:
    |    name    | lastname | telephone | password | confirmpass |           email         |          message             |  
    | Alessandro |   Silva  | 953105988 |   12345  |     12345   | alessandro.silva@oktana | does not appear to be valid! |
    
  Scenario: Mismatch Password

    Given User fills <name> <lastname> <telephone> <password> <confirmpass> <email> with scenario description
    When User Submits
    Then A <message> detailing the error
    Examples:
      |    name    | lastname | telephone | password | confirmpass |               email            |          message         |  
      | Alessandro |   Silva  | 953105988 |   12345  |    123875   | alessaannndro.silva@oktana.com | does not match password! |

      
  Scenario: Missing Privacy Policy's box

    Given User fills <name> <lastname> <telephone> <password> <confirmpass> <email> with scenario description
    When User Submits without checking Privacy Policy box
    Then A <message> detailing the warning
    Examples:
      |    name    | lastname | telephone | password | confirmpass |              email            |            message           |  
      | Alessandro |   Silva  | 953105988 |   12345  |    12345    | alessaanndro.silva@oktana.com | agree to the Privacy Policy! |

  Scenario Outline: Successful register

    Given User fills <name> <lastname> <telephone> <password> <confirmpass> <email> with scenario description
    When User Submits
    Then A <message> confirmation must appear

    Examples: 
    |    name    | lastname | telephone | password | confirmpass |              email              |           message              |  
    | Alessandro |   Silva  | 953105988 |   12345  |     12345   | alesssandro.si3lvap@oktana.com | Your Account Has Been Created! |

  Scenario: Invalid data

    Given User fills <name> <lastname> <telephone> <password> <confirmpass> <email> with scenario description
    When User Submits
    Then A <message> detailing the error
    Examples:
        |    name    | lastname | telephone | password | confirmpass |              email            |            message           |  
        | Aless@andro |   Si#lva  | 953105988 |   12345  |    12345    | alleess77azdro.siilva@oktana.com | field has invalid data! |