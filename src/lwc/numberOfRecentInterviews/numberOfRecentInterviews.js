/**
 * Created by Володимир on 28.09.2021.
 */

import {LightningElement, api} from 'lwc';
import getInterviewList from '@salesforce/apex/Info.getInterviewList';

export default class NumberOfRecentInterviews extends LightningElement {

    @api count;

    async connectedCallback() {
        const interviewList = await getInterviewList();
        this.count = interviewList.length;
    }

}