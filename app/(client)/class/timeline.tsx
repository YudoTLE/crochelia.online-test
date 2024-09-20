"use client";

import { ArrowRightIcon, CalendarIcon } from "@heroicons/react/24/solid";
import { Button, Timeline } from "flowbite-react";

export function Process() {
  return (
    <div className="bg-gradient-to-b from-shade-a to-shade-b">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-16">
        <h2 className="font-roca font-bold text-center text-4xl text-main-b">How To Enroll</h2>
        <Timeline className="font-opensauce m-4 border-transparent max-w-4xl mx-auto">
          <Timeline.Item className="bg-white p-4 rounded-lg">
            <Timeline.Point icon={CalendarIcon} className="text-white"/>
            <Timeline.Content>
              <Timeline.Time>Open Registration</Timeline.Time>
              <Timeline.Title>Choose your class</Timeline.Title>
              <Timeline.Body>
                Pick a class from the options above, or contact us for help, details, and recommendations
              </Timeline.Body>
              <Button color="pink">
                Contact Us
                <ArrowRightIcon className="ml-2 my-1 h-3 w-3"/>
              </Button>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item className="bg-white p-4 rounded-lg">
            <Timeline.Point icon={CalendarIcon} className="text-white"/>
            <Timeline.Content>
              <Timeline.Time>Data Submission</Timeline.Time>
              <Timeline.Title>Fill out the form</Timeline.Title>
              <Timeline.Body>
                Enter your personal information and email to receive the enrollment ticket.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item className="bg-white p-4 rounded-lg">
            <Timeline.Point icon={CalendarIcon} className="text-white"/>
            <Timeline.Content>
              <Timeline.Time>Enrollment</Timeline.Time>
              <Timeline.Title>Check your email for an invitation</Timeline.Title>
              <Timeline.Body>
                Receive your enrollment ticket for the private class
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
      </div>
    </div>
  );
}