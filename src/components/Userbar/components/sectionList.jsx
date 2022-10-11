import './styleSectionList.css'



function SectionList() {
    return(

        <div className='bodySectionList'>
            <header className='headerSectionList'>
                <h1>section</h1>
                <nav className='optionsSectionList'>
                    <button className='btnSectionList'>
                        <i className="ai-chat-add"></i> 
                    </button>
                    <button className='btnSectionList'>
                    <i className="ai-chevron-down"></i>
                    </button>
                </nav>
            </header>
            <nav className='contentsSectionLis'>
                <button className='itensSectionList' > Dashborad </button>
                <button className='itensSectionList' > Slecthes </button>
                <button className='itensSectionList' > Shopping List </button>
            </nav>
        </div>

    )
}


export default SectionList