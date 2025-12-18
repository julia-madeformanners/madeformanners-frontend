// file: PolicyPage.jsx
import React, { useEffect } from "react";
import './policy.scss';
import { useSelector } from "react-redux";
import { useBetween } from "use-between";
import { Helmet } from "react-helmet";

export default function PolicyPage() {
    const state = useSelector((state) => state.data);
    const {
        pageDescription, pageKeywords, websiteTitle
    } = useBetween(state.useShareState);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="policy-page">
            <Helmet>
                <link rel="canonical" href="https://madeformanners.com/policy" />
                <title>Policies | {websiteTitle}</title>
                <meta name="description" content="made for manners policies and terms " />
                <meta name="keywords" content={`${pageKeywords} policies , condations , terms  `} />
                <meta property="og:title" content={`Courses - ${websiteTitle}`} />
                <meta property="og:description" content={pageDescription} />
            </Helmet>

            <h1>Policies — Made for Manners</h1>

            <section>
                <h2>1. About the Platform</h2>
                <p>
                    Made for Manners is an informational platform designed to present details about etiquette and manners courses.
                    The platform does not provide online courses or live-streamed sessions.
                    Its purpose is to showcase course information and facilitate inquiries.
                </p>
            </section>

            <section>
                <h2>2. Course Inquiries and Booking</h2>
                <p>
                    All course bookings, confirmations, and payment arrangements are handled exclusively through direct communication via email.
                    To inquire about availability, pricing, or enrollment, users must contact us at
                    <a href="mailto:hello@madeformanners.com"> hello@madeformanners.com</a>.
                </p>
            </section>

            <section>
                <h2>3. Response Time</h2>
                <p>
                    Our team will respond to all inquiries within a maximum period of two (2) business days.
                </p>
            </section>

            <section>
                <h2>4. Payments and Confirmations</h2>
                <p>
                    Payments are not processed directly through the website.
                    All payment details and confirmations are shared after email communication and agreement on the course details.
                </p>
            </section>

            <section>
                <h2>5. Content and Information Accuracy</h2>
                <p>
                    While we strive to keep all course information accurate and up to date,
                    details such as schedules, pricing, and availability are subject to change
                    and will be confirmed via email.
                </p>
            </section>

            <section>
                <h2>6. User Conduct</h2>
                <p>
                    Users are expected to communicate respectfully and professionally when contacting us.
                    Any misuse of the platform or inappropriate communication may result in refusal of service.
                </p>
            </section>

            <section>
                <h2>7. Privacy</h2>
                <p>
                    We only collect the necessary information required to respond to inquiries and manage bookings.
                    We do not sell, rent, or share personal data with third parties.
                </p>
            </section>

            <section>
                <h2>8. Policy Updates</h2>
                <p>
                    Made for Manners reserves the right to update or modify these policies at any time.
                    Any changes will be published on this page.
                </p>
            </section>

            <section>
                <h2>9. Contact</h2>
                <p>
                    For inquiries, bookings, or further information, please contact us at
                    <a href="mailto:hello@madeformanners.com"> hello@madeformanners.com</a>.
                </p>
            </section>


        </div>
    );
}
