-GIT WORKFLOW-

create issues on github

move issues into the project board's To Do column

move issue to be fixed to the In Progress column

- git checkout -b issue-[issue#]

- code .

make changes to project

- git status

- git add [modified files]

- git commit -m "[#[issue#] short concise commit]"

- git push -u origin issue-[issue#]

- git pull origin main

Create a pull request from the branches tab of the github project and link the issue you are working on.

If no conflicts then merge the ticket branch with the main branch.

move issue that was fixed from the In Progress column of the Github project board to the Done column.

- git checkout main

- git pull

- git branch -D issue-[issue#]
