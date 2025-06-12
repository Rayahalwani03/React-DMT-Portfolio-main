const Article = () => {
  return (
    <div className="min-h-screen bg-white transition-colors duration-300 font-serif">
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Title Section */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight leading-tight">
            The Role of Data Analytics in Enhancing Multilingual Digital Content
          </h1>
          <div className="text-lg text-gray-700 mb-1 italic">
            Published for: ETI462 - Digital Media Translation Course
          </div>
          <div className="text-md text-gray-500">
            Raya Halwani &middot; June 2024
          </div>
        </header>

        {/* Abstract Callout */}
        <section className="mb-10">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Abstract
            </h2>
            <p className="text-gray-800 leading-relaxed">
              In the age of digital globalization, content reaches diverse
              audiences across multiple languages and cultures. This article
              explores the impact of data analytics on multilingual content
              strategy, highlighting how tools like Excel, Power BI, and Python
              empower organizations to localize content effectively. By
              analyzing audience behavior, language preferences, and engagement
              patterns, data analytics supports digital media professionals in
              creating culturally relevant, targeted, and accessible
              communication across platforms.
            </p>
          </div>
        </section>

        {/* Article Body with left border accent */}
        <article className="relative bg-white border-l-4 border-blue-600 pl-8 pr-2 py-8 shadow-md rounded-r-xl">
          {/* 1. Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              Global digital communication has evolved from one-size-fits-all
              publishing to personalized, data-driven content strategies. For
              multilingual digital media to succeed, it must not only be
              translated but also adapted based on user behavior, cultural
              expectations, and real-time feedback. This paper discusses the
              intersection between data analytics and multilingual content,
              focusing on how analysts and translators can collaborate to
              enhance communication quality, user experience, and engagement.
            </p>
          </section>

          {/* 2. Data Analytics in Media Strategy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Data Analytics in Media Strategy
            </h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              Data analytics involves collecting, processing, and interpreting
              large volumes of information to extract meaningful insights. In
              the digital media context, this translates into understanding
              audience demographics, behavior on platforms, content performance,
              and more. Tools like Google Analytics, Power BI, and Excel allow
              digital media teams to:
            </p>
            <ul className="list-disc pl-8 text-gray-800 mb-4">
              <li>Track content views by language and region</li>
              <li>Identify peak engagement times</li>
              <li>
                Determine which formats (video, infographic, text) resonate with
                specific audiences
              </li>
            </ul>
            <p className="text-gray-800 leading-relaxed">
              These insights help tailor the content to maximize reach and
              relevance.
            </p>
          </section>

          {/* 3. Improving Translation and Localization Through Data */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Improving Translation and Localization Through Data
            </h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              Translation in digital media is not only about converting
              words—it's about adapting meaning. Data analytics enhances this
              process by providing:
            </p>
            <ul className="list-disc pl-8 text-gray-800 mb-4">
              <li>
                User language preference data: Allowing automatic language
                detection and personalized experiences
              </li>
              <li>
                Engagement comparisons: Revealing which localized versions
                perform better
              </li>
              <li>
                Feedback loops: Using user ratings or comment sentiment to
                refine translation tone and clarity
              </li>
            </ul>
            <p className="text-gray-800 leading-relaxed">
              For example, analyzing YouTube comments in different languages can
              guide improvements in subtitles or voiceover tone.
            </p>
          </section>

          {/* 4. Case Example: Social Media Campaigns */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Case Example: Social Media Campaigns
            </h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              A hypothetical campaign at a multilingual university might run in
              Turkish, Arabic, and English. Using Excel or Power BI, a data
              analyst could compare performance metrics across these language
              segments:
            </p>
            <ul className="list-disc pl-8 text-gray-800 mb-4">
              <li>Which hashtags generate more interaction in Arabic?</li>
              <li>What type of posts lead to shares in Turkish?</li>
              <li>Do English-language videos result in longer watch time?</li>
            </ul>
            <p className="text-gray-800 leading-relaxed">
              Such data informs both translators and content strategists,
              allowing iterative improvement.
            </p>
          </section>

          {/* 5. Conclusion Callout */}
          <section className="mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                5. Conclusion
              </h2>
              <p className="text-gray-800 leading-relaxed mb-0">
                Data analytics plays a pivotal role in ensuring that digital
                content is not just available in multiple languages, but is also
                effective, culturally aware, and engaging. For students and
                professionals in digital media translation, learning to
                collaborate with data analysts or leverage analytics tools
                themselves is essential. The future of multilingual
                communication lies in integrating data-driven decisions with
                human linguistic and cultural expertise.
              </p>
            </div>
          </section>
        </article>

        {/* Resources */}
        <section className="mt-12 border-t-2 border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Resources</h2>
          <ul className="pl-8 space-y-4 text-gray-800 list-disc">
            <li>
              O'Hagan, M. (2023).{" "}
              <a
                href="https://www.tandfonline.com/doi/full/10.1080/14781700.2023.2282581"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-700 hover:text-blue-900"
              >
                Concepts of translators and translation in online social media
              </a>
              . <em>Translation Studies, online</em>.
            </li>
            <li>
              Microsoft. (2023, September 20).{" "}
              <a
                href="https://learn.microsoft.com/en-us/power-bi/guidance/multiple-language-best-practice"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-700 hover:text-blue-900"
              >
                Use best practices to localize Power BI reports
              </a>
              .
            </li>
            <li>
              Salhab, H. A. (2024).{" "}
              <a
                href="https://doi.org/10.24294/jipd.v8i8.4894"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-700 hover:text-blue-900"
              >
                The use of data analytics in digital marketing for sustainable
                business growth
              </a>
              .{" "}
              <em>
                Journal of Infrastructure, Policy and Development, 8(8), Article
                4894
              </em>
              .
            </li>
            <li>
              Mandava, G. B., Kiran, K. T. P. S., & Rajeswara Rao, D. (2018).{" "}
              <a
                href="https://www.researchgate.net/publication/328074921_Analysis_and_Design_of_Visualization_of_Educational_Institution_Database_using_Power_BI_Tool"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-700 hover:text-blue-900"
              >
                Analysis and design of visualization of educational institution
                database using Power BI tool
              </a>
              .{" "}
              <em>
                Global Journal of Computer Science and Technology: C, 8(4),
                154–160
              </em>
              .
            </li>
            <li>
              Reuter, M., & Montag, C. (2020).{" "}
              <a
                href="https://www.sciencedirect.com/science/article/pii/S0148296322001321"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-700 hover:text-blue-900"
              >
                Big data analytics meets social media: A systematic review of
                underlying characteristics and application areas
              </a>
              . <em>Journal of Business Research, 116, 333–345</em>.
            </li>
          </ul>
        </section>

        <style>{` 
          .font-serif { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }
          .hanging-indent { text-indent: -1.5em; margin-left: 1.5em; }
        `}</style>
      </div>
    </div>
  );
};

export default Article;
