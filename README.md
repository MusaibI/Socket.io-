# Chat Room App

###Note: -
   -socket.emit - sends message to the current user
   -io.emit - send message to every user including current user
   -socket.broadcast.emit - sends messsag to every user except current user
   -io.to.emit - emits an event to everybody in specific room
   -socket.broadcast.to.emit - emits an event to everybody in specific room except current user


## Problem Statement

In the existing chat room application, users need to catch up on past conversations by loading previous messages based on a specified timestamp range. This enhancement aims to improve user experience by enabling them to view messages sent within a specific time frame.

## Introduction + Scenario

With the message storage feature already implemented, users can send and store messages in the chat room application. Now, the goal is to allow users to load previous messages within a defined time range. This feature will enhance user interaction and facilitate seamless navigation through past conversations.

## Objectives

- Extend the chat room application to include a feature for loading previous messages based on a timestamp range.
- Implement a mechanism to retrieve and display messages sent within a specified time frame upon user request.
- Provide users with the option to specify the time range (e.g., messages from the last 24 hours, last week, etc.) for loading previous messages.
- Ensure that the displayed messages maintain chronological order, with the most recent messages appearing at the bottom.

## Expected Output

The expected output includes a user-friendly interface that allows users to navigate through past conversations by loading messages within the specified time frame. Refer to the provided video demonstration for a visual representation of the expected output.

[Watch the video demonstration](https://files.codingninjas.in/lecture_17_3-31682.mp4)
