import speech_recognition as sr


def main():
    r = sr.Recognizer()

    with sr.Microphone() as source:
        r.adjust_for_ambient_noise(source)

        print("Say something...\n")

        audio = r.listen(source)

        # audio.pause_threshold == 3

        try:
            transcriptvar = r.recognize_google(audio)
            print("\n" + transcriptvar)
            print("------------------")
            print(transcriptvar)

        except Exception as e:
            print("Error: " + str(e))

        with open("recordedaudio.wav", "wb") as f:
            f.write(audio.get_wav_data())

        return transcriptvar


if __name__ == "__main__":
    main()
