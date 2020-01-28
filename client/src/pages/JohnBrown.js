import React, {Component} from 'react';
import BackButton from '../components/BackButton';
import DownloadPDF from '../components/DownloadPDF';

class JohnBrown extends Component {
    render() {
        return (
            <>
                <div className="page-header">
                    <ul className="header-items">
                        <BackButton />
                        <DownloadPDF />
                    </ul>
                </div>
                <div className="page-title">
                    <h2>John Brown:</h2>
                    <h2>A Biopic Screenplay</h2>
                </div>
                <img className="project-image" src="https://seubsworld-assets.s3.amazonaws.com/assets/main_middle.jpg" />
    
                <div className="page-content">
                    <p>
                    On December 2nd, 1859 Abolitionist John Brown was hung for treason
                    against the American Government for leading a raid on the Federal
                    Armory in Harpor’s Ferry, Virginia, along with eighteen other men.
                    Brown’s plan was to seize the weapons in the Armory and use them to
                    start a slave revolt that would culminate in an all out war against
                    the institution of slavery. Although Brown’s plan ended in failure,
                    his raid on Harpor’s Ferry polarized the nation over the issue of
                    slavery and Brown is credited with being a major catalyst in starting
                    the American Civil War that ultimately led to the abolishment of slavery.
                    Below are the first twelve pages of the Biopic screenplay I’ve been
                    developing, which follows John Brown from the inception of his plan
                    in the late 1840’s to his raid on Hapror’s Ferry and his execution.
                    </p>
                    <br></br>
                </div>
            </>
        )
    }
}

export default JohnBrown;