# Contribution

This document is primarily for self-reference.

## Commit Messages

When committing changes, use the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) format:

```
<type>(<scope>): <subject>
<BLANKLINE>
<body>
<BLANKLINE>
<footer>
```

Where:
- `<type>` is the type of change (e.g., `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `wip`, `revert`, `release`).
- `<scope>` is an optional scope of the change. For user-facing changes, it should be the page affected; otherwise it can be the folder or module affected.
- `<subject>` is a brief description following conventional commit guidelines, the main ones are: start with a lowercase letter; do not include period at the end; use imperative present tense.
- `<body>` is an optional extended description of the change.
- `<footer>` is an optional footer for additional information (e.g., indicating breaking changes, referencing issues).

Generally, regular commits do not require any optional fields. Merge commits, however, should include a scope, and preferably a body as well. Merge commits also have the PR number in brackets appended to the subject line, for example, `feat(home): add new section to homepage (#711)`.

Additionally, if a commit reverts a previous commit, the subject should be th full original commit message including type and scope. Commit hash should be included in the footer, for example, `Reverts commit <hash>`.

For release commits, simply put the version number in the subject line, for example, `release: v1.0.0`.

## Bug Reports

Use issues to report and document bugs. Make sure to add detailed descriptions and tags to the issue. If applicable, include reproduction steps.

## Pull Requests

Pull requests are required for commiting changes into the main branch. Follow the provided template when creating a pull request. Make sure to sign off merge commits.

## Default Branch

The default branch for this repository is `master`, which is used for deployment and production releases. Therefore, branch protection rules are applied to this branch to ensure stability. No pushes are allowed directly to this branch.
