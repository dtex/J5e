import assert from "assert";
import sinon from "sinon";
import { Analog, Digital, PWM } from "@dtex/mock-io";
import Motor from "j5e/motor";

describe("Motor - Non-Directional", function() {

  describe("Instantiation", function() {

    it("should return a valid non-directional Motor instance when passed a single pin", async function() {
      const motor = await new Motor({
        pwm: {
          pin: 12,
          io: PWM
        }
      });
      assert.equal(motor instanceof Motor, true);
      assert.equal(motor.io.pwm instanceof PWM, true);
      assert.equal(motor.io.dir, null);
      assert.equal(motor.io.cdir, null);
      assert.equal(motor.LOW, 0);
      assert.equal(motor.HIGH, 1023);
    });

    it("should return a valid directional Motor instance when passed two pins", async function() {
      const motor = await new Motor({
        pwm: {
          pin: 12,
          io: PWM
        },
        dir: {
          pin: 13,
          io: Digital
        }
      });
      assert.equal(motor instanceof Motor, true);
      assert.equal(motor.io.pwm instanceof PWM, true);
      assert.equal(motor.io.dir instanceof Digital, true);
      assert.equal(motor.io.cdir, null);
      assert.equal(motor.LOW, 0);
      assert.equal(motor.HIGH, 1023);
    });

    it("should return a valid directional Motor instance when passed three pins", async function() {
      const motor = await new Motor({
        pwm: {
          pin: 12,
          io: PWM
        },
        dir: {
          pin: 13,
          io: Digital
        },
        cdir: {
          pin: 14,
          io: Digital
        }
      });
      assert.equal(motor instanceof Motor, true);
      assert.equal(motor.io.pwm instanceof PWM, true);
      assert.equal(motor.io.dir instanceof Digital, true);
      assert.equal(motor.io.cdir instanceof Digital, true);
      assert.equal(motor.LOW, 0);
      assert.equal(motor.HIGH, 1023);
    });

    it("should return a valid directional Motor instance and a brake when passed three pins and a brake", async function() {
      const motor = await new Motor({
        pwm: {
          pin: 12,
          io: PWM
        },
        dir: {
          pin: 13,
          io: Digital
        },
        cdir: {
          pin: 14,
          io: Digital
        },
        brake: {
          pin: 2,
          io: Digital
        }
      });

      assert.equal(motor instanceof Motor, true);
      assert.equal(motor.io.pwm instanceof PWM, true);
      assert.equal(motor.io.dir instanceof Digital, true);
      assert.equal(motor.io.cdir instanceof Digital, true);
      assert.equal(motor.io.brake instanceof Digital, true);
      assert.equal(motor.LOW, 0);
      assert.equal(motor.HIGH, 1023);
    });

    it("should return a valid directional Motor instance and a sensor when passed three motor pins and a current pin", async function() {
      const motor = await new Motor({
        pwm: {
          pin: 12,
          io: PWM
        },
        dir: {
          pin: 13,
          io: Digital
        },
        cdir: {
          pin: 14,
          io: Digital
        },
        current: {
          pin: 17,
          io: Analog
        }
      });
      assert.equal(motor instanceof Motor, true);
      assert.equal(motor.io.pwm instanceof PWM, true);
      assert.equal(motor.io.dir instanceof Digital, true);
      assert.equal(motor.io.cdir instanceof Digital, true);
      assert.equal(motor.io.current instanceof Analog, true);
      assert.equal(motor.LOW, 0);
      assert.equal(motor.HIGH, 1023);
      assert.equal(motor.io.current.resolution, 10);
    });

    it("should return a valid directional Motor instance when passed a pwm, dir, cdir, brake and current pin", async function() {
      const motor = await new Motor({
        pwm: {
          pin: 12,
          io: PWM
        },
        dir: {
          pin: 13,
          io: Digital
        },
        cdir: {
          pin: 14,
          io: Digital
        },
        brake: {
          pin: 11,
          io: Digital
        },
        current: {
          pin: 17,
          io: Analog
        }
      });
      assert.equal(motor instanceof Motor, true);
      assert.equal(motor.io.pwm instanceof PWM, true);
      assert.equal(motor.io.dir instanceof Digital, true);
      assert.equal(motor.io.cdir instanceof Digital, true);
      assert.equal(motor.io.brake instanceof Digital, true);
      assert.equal(motor.io.current instanceof Analog, true);
      assert.equal(motor.LOW, 0);
      assert.equal(motor.HIGH, 1023);
      assert.equal(motor.io.current.resolution, 10);
    });

    // All tests related to default instantiation

    describe("Options", function() {

      describe("invertPWM", async function() {

        it("should be configured appropriately for the option", async function() {
          // ...
        });

        // [ All other tests related to this option ]

      });

      describe("enabled", async function() {

        it("should not be enabled when enabled: false is passed to configuration", async function() {

          const motor = await new Motor({
            pwm: {
              pin: 12,
              io: PWM
            }
          });

          motor.configure({
            enabled: false
          });

          assert.equal(motor.enabled, false);
        });

        it("should not mode the motor when enabled: false is passed to configuration", async function() {

        });

      });

      describe("threshold", async function() {

        it("should have the correct theshold when a custom threshold is passed", async function() {

        });

        // [ All other tests related to this option ]

      });

    });

    // [ All other options, each with it's own describe ]

  });

  describe("Properties", function() {

    describe("isOn", function() {

      it("should respond with the property value", async function() {
        // ...
      });

      // [ all other tests related to someProperty ]

    });

    describe("currentSpeed", function() {

      it("should respond with the property value", async function() {
        // ...
      });

      // [ all other tests related to someProperty ]

    });

    describe("enabled", function() {

      it("should respond with the property value", async function() {
        // ...
      });

      // [ all other tests related to someProperty ]

    });

    // [ All other properties, each with it's own describe ]

  });

  describe("Methods", function() {

    describe("speed", function() {

      it("should set the motor to the requested speed", async function() {
        const motor = await new Motor({
          pwm: {
            pin: 12,
            io: PWM
          },
          dir: {
            pin: 13,
            io: Digital
          }
        });

        const writeSpy = sinon.spy(motor.io.pwm, "write");
        motor.speed(0.7);
        assert.equal(writeSpy.callCount, 1);
        assert.equal(writeSpy.getCall(0).args[0], 716);

      });
    });

    describe("forward", function() {

      it("should do the right thing", async function() {
        // ...
      });

      // [ all other tests related to someMethod ]

    });

    describe("fwd", function() {

      it("should do the right thing", async function() {
        // ...
      });

      // [ all other tests related to someMethod ]

    });

    describe("reverse", function() {

      it("should do the right thing", async function() {
        // ...
      });

      // [ all other tests related to someMethod ]

    });

    describe("rev", function() {

      it("should do the right thing", async function() {
        // ...
      });

      // [ all other tests related to someMethod ]

    });

    describe("start", function() {

      it("should do the right thing", async function() {
        // ...
      });

      // [ all other tests related to someMethod ]

    });

    describe("stop", function() {

      it("should do the right thing", async function() {
        // ...
      });

      // [ all other tests related to someMethod ]

    });

    describe("brake", function() {

      it("should do the right thing", async function() {
        // ...
      });

      // [ all other tests related to someMethod ]

    });

    describe("release", function() {

      it("should do the right thing", async function() {
        // ...
      });

      // [ all other tests related to someMethod ]

    });

    // [ All other methods, each with it's own describe ]

  });

  describe("Events", function() {

    describe("start", function() {

      it("should emit the event at the appropriate time", async function() {
        // ...
      });

      // [ all other tests related to someEvent ]

    });

    describe("stop", function() {

      it("should emit the event at the appropriate time", async function() {
        // ...
      });

      // [ all other tests related to someEvent ]

    });

    describe("brake", function() {

      it("should emit the event at the appropriate time", async function() {
        // ...
      });

      // [ all other tests related to someEvent ]

    });

    describe("release", function() {

      it("should emit the event at the appropriate time", async function() {
        // ...
      });

      // [ all other tests related to someEvent ]

    });

    // [ All other events, each with it's own describe ]

  });

});
