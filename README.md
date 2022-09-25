# Storybook Addon URL Inspector

Inspect URLs when they are modified by components

## Motivation

[Deep links](https://www.adjust.com/glossary/deep-linking/) are a very attractive feature for a app to have. But when you use modern web tools like react (or others) it doesn't happen automatically.

Deep locations within your app are usually defined by its state, and this is typically entirely separate from the URL. The solution to this problem is to encode your state in the URL.

This is not generally a complicated task, and you might well build your own tools for it, over say using a pre-exiting solution like [react-router](https://reactrouter.com/). If you do, you will likely want to test these tools the same you would any other component or hook. But, and here is the heart of it, storybook does not provide any way to analyse how components interact with their URL. That is what this addon is for.

## Function

Unfortunately, there is no event listener for window.location changes - if you know of one, please let me know. So, as of right now, the URL is tracked via polling. This _shouldn't_ have a very significant impact on performance, but please be aware that it might.

I am working on features to allow you to adjust the polling frequency and to turn it off with a button on the toolbar.
