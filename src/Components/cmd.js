import './cmd.css'

export default function CommandLine({lines, setLines,iRef}) {
    const appendOncCmd = (v) => {
        let tmpLines = Array(v)
        setLines(state => state.concat(tmpLines))
        if (lines.length > 11) {
            setLines([])
        }
    }

    const registerText = (e) => {
        if (e.key === 'Enter') {
            let link = ''
            let not_found = false
            switch (String(e.target.value).toLowerCase()) {
                case '!linkedin':
                    link = 'https://www.linkedin.com/in/rafael-barbosa-a908a7133/'
                    break;
                case '!github':
                    link = 'https://github.com/nothiel'
                    break;
                case '!twitter':
                    link = 'https://twitter.com/nothielitself'
                    break;
                case '!whatsapp':
                    link = 'https://wa.me/5511946459632'
                    break;
                case '!gmail':
                    link = 'mailto:rafaellb2555@gmail.com?subject="Job proposition: 30k USD"'
                    break;
                case '!easteregg':
                    link = 'https://matias.ma/nsfw/'
                    break;
                default:
                    appendOncCmd("rafash: command not found: " + e.target.value)
                    not_found = true
                }
            if (link) {
                window.open(link)
            }
            if (!not_found) appendOncCmd(e.target.value)
            e.target.value = ''
        }
    }

    return <input type='text' className='input-text' ref={iRef} onKeyPress={registerText}/>
} 