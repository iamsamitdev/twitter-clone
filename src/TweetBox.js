import React, { useState } from "react"
import "./TweetBox.css"
import { Avatar, Button } from "@material-ui/core"
import firebase from "firebase"
import db from "./firebase"

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = (e) => {
    e.preventDefault()

    if (tweetMessage !== "") {
      db.collection("posts").add({
        displayName: "Samit Koyom",
        username: "iamsamitdev",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "https://pbs.twimg.com/profile_images/378800000380531958/177168617ea064f9331e5ecb1d8d8fcb_200x200.jpeg",
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
      })
    }

    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/378800000380531958/177168617ea064f9331e5ecb1d8d8fcb_200x200.jpeg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
