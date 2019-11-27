import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/RinGoku98" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/RinGoku" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="mailto:yuyu80105@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; RinGoku:Yuta Sako</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
