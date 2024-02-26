# Cypress Test for Telus Search Functionality

This documentation provides an overview and setup guide for a Cypress test designed to verify the search functionality on the Telus website. The test ensures that search results are relevant and that certain UI elements behave as expected.

## Overview

The Cypress test script is designed to automate the following user interactions and checks on the Telus website:

1. Open the Telus homepage.
2. Click on the search icon.
3. Type "internet" into the search input field.
4. Verify that the third option in the search dropdown contains the word "internet".
5. Click on the third search option.
6. Check that the page heading includes the text entered in the search.
7. Verify that certain sections of the search results page contain at least 6 items with clickable links.

The sections checked include articles, forums, related information, and blogs.

## Prerequisites

Before running the test, ensure you have the following installed:

- Node.js and npm
- Cypress

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies using npm:

```bash
npm install
npx cypress open
```
