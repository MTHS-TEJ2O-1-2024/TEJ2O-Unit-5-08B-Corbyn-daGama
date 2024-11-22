/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Corbyn da Gama
 * Created on: Oct 2024
 * This program  moves the stepper motor back and forth
*/

// variables and showing happy face
basic.showIcon(IconNames.Happy)
let distanceOfObject: number

// while true statement
while (true) {
    distanceOfObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    // if distance is > than 10
    if (distanceOfObject > 10) {
        basic.showIcon(IconNames.Yes)
        robotbit.StpCarMove(10, 48)
    } else {
        basic.showIcon(IconNames.No)
        robotbit.StpCarMove(0, 0)
        basic.pause(500)

        // it backups
        robotbit.StpCarMove(-10, 48)
        basic.pause(1000)

        //  it turns 90 degree
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0)
        basic.pause(500)
        robotbit.StpCarMove(10, 48)
    }
}
