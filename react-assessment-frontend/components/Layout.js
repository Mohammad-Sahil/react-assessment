import Head from "next/head"

const Layout = ({children}) => {
  return (
        <>
        <Head>
            <title>Mohammad Sahil | React Assessment</title>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="layout_body" style={{height: "100vh"}}>
            <div className="layout_nav display-6 text-dark text-uppercase">Basic CRUD Operation</div>
            <div className="layout_content">
                {children}
            </div>
            <div className="layout_footer">
                <p>Built with ❤ by Sahil</p>
            </div>
        </div>
        </>
  )
}

export default Layout