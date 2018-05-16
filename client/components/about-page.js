import React, { Component } from 'react';
import { blue500 } from 'material-ui/styles/colors'

const styles = {
  headline: {
    color: blue500
  }
};

export default class AboutPage extends Component {


    render () {
        let question1 = "What service does Blockchain to the People provide?";
        let answer1 = "Blockchain to the people is a secure voting platform for communities. Our hope is that communities that value decentralized power structures and want to avoid traditional, outdated mechanisms of trust will find our platform useful for aligning your elections with your values. We provide a radical departure from the traditional avenues of trust, and give every community leader, whether they are grassroots or highly established, a unified means of setting up the terms of their elections, monitoring the percentage of community member participation, and viewing each vote in a permanent and transparent public ledger.";
        let question2 = "What is a decentralized application?";
        let answer2 = "You can use Ethereum and its smart contracts to build decentralized application (DApps). The idea of a decentralized application is that its backend codes runs on a decentralized peer-to-peer network (i.e. the blockchain) rather than on a centralized server controlled by any one individual or organization. Blockchain to the People maintains a database which contains user information, but stores all data pertaining to votes on the blockchain. Powerful cryptography on the blockchain means that no one has access to who our users voted for -- not us, not the community admin, and not hackers. Likewise, because the blockchain is immutable, there is no way of altering the collective voting record once a vote has been cast.";
        let question3 = "How does a smart contract work?";
        let answer3 = "A smart contract is a contract that is defined by code-- i.e., it will be executed impersonally, accurately, and fairly every time. The terms of the agreement are written into the smart contract and the contract gives control of the information to whoever rightly owns it. One way to imagine the way smart contracts works without delving into the code is that it’s like a vending machine. The machine functions as an intermediary between two parties. Given the same input, it reliably spits out the same output.";
        let question4 = "What is the blockchain?";
        let answer4 = "You can think about the blockchain as a digital ledger that used advanced cryptography to eliminate the need for trust in transactions. You can also think of it like a distributed database. It is literally a distributed computing architecture that is made up of blocks. The blocks are themselves made up of network nodes, and every node executes and records every transaction. It is only possible to add blocks to the end of the chain, one at a time. The cryptography that makes the foundation of this system secures individual interactions with the ledger. The idea is that the ledger is a public record, so no one institution is the source of truth for any transaction that is stored on the blockchain.";

        return (
          <div className="flex-center">
            <div className="header">Frequently Asked Questions</div>
            <br />
            <div className="faq-box">
              <div style={styles.headline} className="info"><b>{question1}</b></div>
              <br />
              <div className="info"><b></b>  {answer1}</div>
            </div>
            <br />
            <br />
            <div className="faq-box">
              <div style={styles.headline} className="info"><b>Q: {question2}</b></div>
              <br />
              <div className="info"><b>A:</b>  {answer2}</div>
            </div>
            <div className="faq-box">
              <div style={styles.headline} className="info"><b>Q: {question3}</b></div>
              <br />
              <div className="info"><b>A:</b>  {answer3}</div>
            </div>
            <div className="faq-box">
              <div style={styles.headline} className="info"><b>Q: {question4}</b></div>
              <br />
              <div className="info"><b>A:</b>  {answer4}</div>
            </div>
          </div>
        )
    }

}
