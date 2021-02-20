import React from "react"
import "./Widgets.css"
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed"
import SearchIcon from "@material-ui/icons/Search"

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1354707823628750849"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="iamsamit"
          options={{ height: 600 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/iamsamitdev"}
          options={{ text: "#reactjs is awesome", via: "Samit Koyom" }}
        />
      </div>
    </div>
  )
}

export default Widgets
