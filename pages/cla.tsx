import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Cla: NextPage = () => {

  return (
    <>
      <Head>
        <title>CLA</title>
        <meta
          name="description"
          content="An Open Source Epic, GOG and Amazon Prime Games Launcher"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="hero">
        <div className="container">
          <h1>Contributor License Agreement</h1>
          <p>
            This Contribution License Agreement (the <strong>"CLA"</strong>) is
            between the individual set forth in the signature block (
            <strong>"You"</strong>) and Heroic Labs, Inc. (
            <strong>"Heroic"</strong>), effective as of the date of Your
            signature and sets forth the terms pursuant to which You may provide
            Contributions to Heroic.
          </p>
          <p>You accept and agree to the following terms and conditions for Your past, present and future Contributions submitted to Heroic's Heroic Games Launcher project (the "Project"). In return, Heroic will not use Your Contributions in a way that is contrary to Heroic's business objectives. Except for the license granted herein to Heroic and recipients of software distributed by Heroic, You reserve all right, title, and interest in and to Your Contributions.</p>
        </div>
      </header>
      <div className="container">
        <ol>
          <li>
            <u>Definitions.</u>{' '}
            <strong>"Contribution"</strong> means any original work of authorship,
            including any modifications or additions to an existing work, that You
            intentionally submit, or have submitted previously, to Heroic for
            inclusion in, or documentation of, the Project.{' '}
            <strong>"Submit"</strong> means any form of electronic, verbal, or
            written communication sent to Heroic or its representatives, including
            but not limited to communication on electronic mailing lists, source
            code control systems, and issue tracking systems that are managed by,
            or on behalf of, Heroic for the purpose of discussing and improving the
            Project, but excluding communication that is conspicuously marked or
            otherwise designated in writing by You as "Not a Contribution."
          </li>
          <li>
            <u>Copyright License.</u> Subject to the terms and conditions of this CLA, You hereby grant to Heroic and to recipients of software distributed by Heroic a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, sublicense, and distribute Your Contributions and such derivative works.
          </li>
          <li>
            <u>Patent License.</u> Subject to the terms and conditions of this CLA, You hereby grant to Heroic and to recipients of software distributed by Heroic a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Project, where such license applies only to those patent claims licensable by You that are necessarily infringed by Your Contribution(s) alone or by combination of Your Contribution(s) with the Project to which such Contribution(s) was submitted. If any entity institutes patent litigation against You or any other entity (including a cross-claim or counterclaim in a lawsuit) alleging that Your Contribution, or the Project to which You have contributed, constitutes direct or contributory patent infringement, then any patent licenses granted to that entity under this CLA for that Contribution or Project will terminate as of the date such litigation is filed.
          </li>
          <li>
            <u>Representations and Warranties.</u> The Licensor represents and warrants that:
            <ul>
              <li>You are legally entitled to grant the above license, and if Your employer(s) has rights to intellectual property that You create that includes Your Contributions, then You represent and warrant that You have received permission to make Contributions on behalf of that employer, that Your employer has waived such rights for Your Contributions to Heroic, or that Your employer has executed a separate CLA with Heroic;</li>
              <li>Each of Your Contributions is Your original creation (see section 6 for submissions on behalf of others); and</li>
              <li>Your Contribution submissions include complete details of any third-party license or other restriction (including, but not limited to, related patents and trademarks) of which You are personally aware and which are associated with any part of Your Contributions.</li>
            </ul>
          </li>
          <li>
            <u>Support; Disclaimer.</u> You are not expected to provide support for Your Contributions, except to the extent You desire to do so. You may provide support for free, for a fee, or not at all. Unless required by applicable law or agreed to in writing, You provide Your Contributions on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.
          </li>
          <li>
            <u>Third Party Works.</u> If You wish to submit work that is not Your original creation, then You may submit it to Heroic separately from any Contribution, identifying the complete details of its source and of any license or other restriction (including, but not limited to, related patents, trademarks, and license agreements) of which You are personally aware, and conspicuously marking the work as "Submitted on behalf of a third-party: [named here]".
          </li>
          <li>
            <u>Notice.</u> You agree to notify Heroic of any facts or circumstances of which You become aware that would make Your representations in this CLA inaccurate in any respect.
          </li>
          <li>
            <u>General.</u> This CLA is the entire understanding and agreement with respect to the subject matter hereof, and supersedes any and all prior or contemporaneous representations, understandings, and agreements, between the parties regarding same. If any part of this CLA is found to be unenforceable, the remaining portions of this CLA will remain in full force and effect. No modification of or amendment to this CLA, nor any waiver of any rights under this CLA, will be effective unless in writing signed by the party to be charged, and the waiver of any breach or default will not constitute a waiver of any other right under this CLA or any subsequent breach or default. Nothing in this CLA creates and the parties do not intend to create, any partnership or joint venture between themselves. Either party may freely assign this CLA. This CLA is binding upon and will inure to the benefit of a party's successors and permitted assigns. This CLA will be governed by the laws of the State of Delaware. Exclusive jurisdiction of any and all disputes hereunder will be in the state and federal courts in Wilmington, Delaware. This CLA may be executed in counterparts with the same effect as if all signatories had signed the same document.
          </li>
        </ol>
      </div>
      <footer className="footer">
        <div
          className="container"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div>
            <p>
              <strong>Your Name: __________________________________</strong>
              <br />
            </p>
            <p>
              <strong>By: __________________________________</strong>
              <br />
            </p>
            <p>
              <strong>Date: ____/____/____</strong>
              <br />
            </p>
            <p>
              <strong>Email: __________________________________</strong>
              <br />
            </p>
          </div>
          <div>
            <p>
              <strong>Heroic Labs, Inc.</strong>
            </p>
            <p>
              <strong>By: __________________________________</strong>
              <br />
            </p>
            <p>
              <strong>Date: ____/____/____</strong>
              <br />
            </p>
          </div>
        </div>
      </footer>
      <div className="container">
        <button onClick={() => window.print()}>Print CLA</button>
      </div>
    </>
  )
}

export default Cla
