import { expect, test } from '@_playwright-src/fixtures/merge.fixture';

//TODO: // add manual translation
// verify translation
// reject translation
// edit translation
// re-translate edited original content

test.describe('Verify translations @smoke', () => {
  test('Verify machine translation for Polish and Tagalog langs', async ({ createFeedbackAndOpenAndRejectAfterTests }) => {
    // Arrange
    const reviewFeedbackView = (await createFeedbackAndOpenAndRejectAfterTests()).page;
    const exceptedTranslationInPolish = 'Czy masz jakieś doświadczenie, którym chciałbyś się podzielić?';
    const exceptedTranslationInTagalog = 'Mayroon bang karanasan na mayroon ka na nais mong ibahagi?';

    // Act
    const translations = await reviewFeedbackView.checkTranslations();

    // Assert
    expect(translations.langPL).toContain(exceptedTranslationInPolish);
    expect(translations.langTG).toContain(exceptedTranslationInTagalog);
  });

  test('Verify status text when story is translated', async ({ createFeedbackAndOpenAndRejectAfterTests }) => {
    // Arrange
    const reviewFeedbackView = (await createFeedbackAndOpenAndRejectAfterTests()).page;
    const exceptedStatusText = /Text translated to \w+/;

    // Act
    const translations = (await reviewFeedbackView.translatedTextStatus.allTextContents()).toString();

    // Assert
    expect(translations, 'All translation status should have text "Text translated to "').toMatch(exceptedStatusText);
  });

  test('Verify status text when story is notTranslated', async ({ createFeedbackAndOpenAndRejectAfterTests }) => {
    // Arrange
    const reviewFeedbackView = (await createFeedbackAndOpenAndRejectAfterTests('Lorem ipsum xxx')).page;

    const exceptedStatusText = /Unavailable in \w+/;

    // Act
    const translations = (await reviewFeedbackView.translatedTextStatus.allTextContents()).toString();

    // Assert
    expect(translations, 'All translation status should have text "Text translated to "').toMatch(exceptedStatusText);
  });
});
