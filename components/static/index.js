import React, { Component } from "react";
import sanitizeHtml from "sanitize-html";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class PageContent extends Component {
  render() {
    const { page } = this.props;

    if (!page) {
      const { error, loading } = this.props;

      if (error) return <div>Error! {error.message}</div>;

      if (loading) return <div>Loading...</div>;
    }

    const cleanContent = sanitizeHtml(page.content, {
      allowedTags: [
        "a",
        "b",
        "strong",
        "ul",
        "li",
        "ol",
        "br",
        "p",
        "h3",
        "h4",
        "h5",
        "h6",
      ],
      allowedAttributes: {
        a: ["href", "target", "class"],
        p: ["style"],
        ul: ["style"],
      },
      allowedSchemes: ["https", "mailto", "tel"],
    });

    return (
      <main id="tg-main" className="cs-container">
        <div className="cs-top-gap">
          <div className="cs-row">
            <div className="cs-col-12">
              <div
                id="tg-content"
                className="cs-card cs-card-bordered cs-card-rounded cs-p-md"
              >
                <h1> {page.title} </h1>
                <div
                  style={{
                    fontWeight: "400",
                  }}
                  className="cs-text-justify"
                  dangerouslySetInnerHTML={{
                    __html: cleanContent,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default PageContent;
